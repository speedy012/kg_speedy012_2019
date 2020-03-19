function iso(s, t) {
  if(s.length !== t.length) return false
  let hash = {}

  for(let i=0; i < s.length; i++){
    if(!hash[s[i]]) {
      hash[s[i]] = t[i]
    } else if(hash[s[i]] !== t[i]) {
      return false
    }
  return true
};

console.log(iso("foo", "bar"))
