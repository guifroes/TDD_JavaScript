# encoding: utf-8
# A sample Guardfile
# More info at https://github.com/guard/guard#readme

notification :terminal_notifier_guard

guard :shell, :all_on_start => true do
  watch(/^(test|lib)\/.+/) do
    status = `/usr/local/lib/node_modules/mocha/bin/mocha --reporter spec 2>&1`

    if status =~ /failed/
      Notifier.notify("Failed", :title => "Some tests failed", :image => :failed)
    else
      Notifier.notify("Success", :title => "All green", :image => :success)
    end
	
	Notifier.notify("Success", :title => "All green", :image => :success)
    
    status
  end
end