const now = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morgen"
    if (hour < 18) return "nachmittag"
    return "abend"
}
export default now;