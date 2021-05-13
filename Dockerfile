FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client\
		 		libruby2.5 ruby2.5-dev bundler \
          			libmagickwand-dev libxml2-dev libxslt1-dev nodejs \
                     		apache2 apache2-dev build-essential git-core \
                     		postgresql postgresql-contrib libpq-dev libsasl2-dev \
                     		imagemagick libffi-dev libgd-dev libarchive-dev libbz2-dev \
												python


RUN mkdir /openstreetmap-website
WORKDIR /openstreetmap-website
COPY Gemfile /openstreetmap-website/Gemfile
COPY Gemfile.lock /openstreetmap-website/Gemfile.lock
RUN bundle install
# RUN bundle exec rake yarn:install
COPY . /openstreetmap-website

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3002
# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
