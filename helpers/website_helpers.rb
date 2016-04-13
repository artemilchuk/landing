module WebsiteHelpers
	def copyright_year_range(start_year)
		# https://rietta.com/blog/2011/12/26/how-to-automate-copyright-notice/

	  start_year = start_year.to_i
	  current_year = Time.new.year

	  if current_year > start_year && start_year > 2010
	    "#{start_year}–#{current_year}"
	  elsif start_year > 2010
	    "#{start_year}"
	  else
	    "#{current_year}"
	  end
	end
end