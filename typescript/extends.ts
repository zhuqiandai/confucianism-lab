function greet<Str extends { content: string }> (s: Str) {
	return s.content	
}
