require "set"

module Jekyll
  module TopCitedScholar
    def top_cited_scholar_ids(papers, max = 10)
      return [] unless papers.respond_to?(:map)

      site = @context.registers[:site]
      scholar_config = site.config["scholar"] || {}
      bib_source = scholar_config["source"] || "_bibliography"
      bibliography = scholar_config["bibliography"] || "references.bib"
      bib_path = File.join(site.source, bib_source.to_s.sub(%r{\A/+}, ""), bibliography)
      available_ids = google_scholar_ids_in_bibliography(bib_path)

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
        .select { |article_id, _citations, _year, _title| available_ids.include?(article_id) }
        .sort_by { |article_id, citations, year, title| [-citations, -year, title.downcase, article_id] }
        .first(max.to_i)
        .map(&:first)
    end

    private

    def google_scholar_ids_in_bibliography(path)
      return [] unless File.exist?(path)

      File.read(path).scan(/google_scholar_id\s*=\s*\{([^}]+)\}/).flatten.map(&:strip).to_set
    end
  end
end

Liquid::Template.register_filter(Jekyll::TopCitedScholar)
