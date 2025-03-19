const now = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Morgen"
    if (hour < 18) return "Nachmittag"
    return "Abend"
}
export default now;