export function RLE(s)
{
    if (s.length === 0) return "";

    var result = "";
    var current_char = s.charAt(0);
    var count = 1;

    for (var i = 1; i < s.length; i++)
    {
        if (current_char != s.charAt(i))
        {
            result += count;
            result += current_char;
            current_char = s.charAt(i);
            count = 1;
        }
        else
        {
            count++;
        }
    }

    result += count;
    result += current_char;
    return result;
}