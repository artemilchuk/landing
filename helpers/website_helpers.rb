module WebsiteHelpers

	# updates year in copyright for you

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




	# adds class "active" to current page

	def nav_link(link_text, page_url, options = {})
    options[:class] ||= ""
    
    if current_page.url.length > 1
      current_url = current_page.url.chop
    else
      current_url = current_page.url
    end
    options[:class] << " active" if page_url == current_url
    link_to(link_text, page_url, options)
	 end
end