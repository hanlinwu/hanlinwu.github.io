require "set"

module Jekyll
  module TopCitedScholar
    def selected_author_scholar_ids(papers)
      return [] unless papers.respond_to?(:map)

      site = @context.registers[:site]
      scholar_config = site.config["scholar"] || {}
      bib_source = scholar_config["source"] || "_bibliography"
      bibliography = scholar_config["bibliography"] || "references.bib"
      bib_path = File.join(site.source, bib_source.to_s.sub(%r{\A/+}, ""), bibliography)
      available_ids = eligible_google_scholar_ids_in_bibliography(bib_path, scholar_config)

      papers
        .map do |key, paper|
          article_id = key.to_s.split(":").last
          [
            article_id,
            paper.fetch("citations", 0).to_i,
            paper.fetch("year", 0).to_i,
            paper.fetch("title", "").to_s,
          ]
        end
        .select { |article_id, citations, _year, _title| citations > 10 && available_ids.include?(article_id) }
        .sort_by { |article_id, citations, year, title| [-citations, -year, title.downcase, article_id] }
        .map(&:first)
    end

    private

    def eligible_google_scholar_ids_in_bibliography(path, scholar_config)
      return [] unless File.exist?(path)

      File.read(path)
        .scan(/@\w+\s*\{.*?(?=^@\w+\s*\{|\z)/m)
        .map do |entry|
          scholar_id = entry[/google_scholar_id\s*=\s*\{([^}]+)\}/, 1]&.strip
          scholar_id if scholar_id && first_or_corresponding_author?(entry, scholar_config)
        end
        .compact
        .to_set
    end

    def first_or_corresponding_author?(entry, scholar_config)
      authors = entry[/^\s*author\s*=\s*\{([^}]+)\}/, 1].to_s
      authors.split(/\s+and\s+/).each_with_index.any? do |name, index|
        (index.zero? || name.match?(/[*∗]/)) && self_author?(name, scholar_config)
      end
    end

    def self_author?(name, scholar_config)
      clean_name = name.gsub(/[*∗†‡§¶‖&^]/, "").strip
      return true if Array(scholar_config["name_aliases"]).include?(clean_name)

      last, first = clean_name.split(",", 2).map(&:strip)
      Array(scholar_config["last_name"]).include?(last) &&
        Array(scholar_config["first_name"]).include?(first)
    end
  end
end

Liquid::Template.register_filter(Jekyll::TopCitedScholar)
