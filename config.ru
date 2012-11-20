use Rack::Static,
  :urls => %w(/img /style.css /script.js /apple-touch-icon.png /favicon.ico /favicon.png),
  :root => 'public'

map '/' do
  run Proc.new {|env|
    [200, {'Content-Type' => 'text/html', 'Cache-Control' => 'no-cache,  must-revalidate'}, File.open('public/index.html', File::RDONLY)]
  }
end

map '/infos' do
  run Proc.new {|env|
    [200, {'Content-Type' => 'text/html', 'Cache-Control' => 'no-cache,  must-revalidate'}, File.open('public/infos.html', File::RDONLY)]
  }
end

map '/regles' do
  run Proc.new {|env|
    [200, {'Content-Type' => 'text/html', 'Cache-Control' => 'no-cache,  must-revalidate'}, File.open('public/regles.html', File::RDONLY)]
  }
end

map '/prix' do
  run Proc.new {|env|
    [301, {'Location' => '/regles', 'Content-type' => 'text/html'}, StringIO.new]
  }
end
