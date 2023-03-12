


const scriptsInEvents = {

	async Ui_Event81(runtime, localVars)
	{
		function is_zero(x, y)
		{
			return obj[y][x] === "0";
		}
		
		function is_top(width)
		{
			for (let x = 0; x < width; x++) if (!is_zero(x, 0)) return false;
			return true;
		}
		
		function is_bottom(width, height)
		{
			for (let x = 0; x < width; x++) if (!is_zero(x, height - 1)) return false;
			return true;
		}
		
		function is_left(height)
		{
			for (let y = 0; y < height; y++) if (!is_zero(0, y)) return false;
			return true;
		}
		
		function is_right(width, height)
		{
			for (let y = 0; y < height; y++) if (!is_zero(width - 1, y)) return false;
			return true;
		}
		
		const data = JSON.parse(localVars.data_);
		const obj = [];
		data.forEach(line => obj.push(line.split("")));
		
		while (true)
		{
			const width = obj[0].length;
			const height = obj.length;
			
			if (is_top(width))
			{
				obj.shift();
				continue;
			}
			
			if (is_bottom(width, height))
			{
				obj.pop();
				continue;
			}
			
			if (is_left(height))
			{
				for (let y = 0; y < height; y++) obj[y].shift();
				continue;
			}
			
			if (is_right(width, height))
			{
				for (let y = 0; y < height; y++) obj[y].pop();
				continue;
			}
			
			break;
		}
		
		const result = [];
		obj.forEach(line => result.push(line.join()));
		runtime.alert(result);
		runtime.setReturnValue(JSON.stringify(result));
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

