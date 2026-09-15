require 'digest'

module Jekyll
  module StylesheetCacheBust
    def bust_stylesheet_cache(url)
      site = @context.registers[:site]
      sass_dir = site.config.fetch('sass', {}).fetch('sass_dir', '_sass')
      sources = Dir.glob(File.join(site.source, sass_dir, '**', '*')).select { |path| File.file?(path) }
      sources.concat([
        File.join(site.source, 'assets/css/main.scss'),
        File.join(site.source, '_config.yml')
      ])

      # Hash the actual Sass sources, entry point, and build configuration.
      # The bundled filter uses assets/_sass, which does not exist in this site.
      digest = Digest::SHA256.new
      sources.sort.each do |path|
        next unless File.file?(path)

        digest.update(path.delete_prefix("#{site.source}/"))
        digest.update("\0")
        digest.update(File.binread(path))
        digest.update("\0")
      end

      "#{url.split('?').first}?v=#{digest.hexdigest[0, 16]}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::StylesheetCacheBust)
