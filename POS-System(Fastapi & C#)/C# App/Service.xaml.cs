using System.Collections.ObjectModel;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace nails_pos_sys;

public partial class Service : ContentPage
{
    public class MyDataModel
    {
        [JsonPropertyName("userId")]
        public int UserId { get; set; }
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("title")]
        public string Title { get; set; }
        [JsonPropertyName("completed")]
        public bool Completed { get; set; }
        // Other properties
    }

    public Service()
	{
        Console.WriteLine("init servive component");
        InitializeComponent();
        GetDataFromApiAsync();
        Console.WriteLine("finish init servive component");
    }

    private readonly HttpClient _httpClient = new HttpClient();
    public List<MyDataModel> DataList { get; private set; } = new List<MyDataModel>();

    private async void GetDataFromApiAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync("https://jsonplaceholder.typicode.com/todos");
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                DataList = JsonSerializer.Deserialize<List<MyDataModel>>(content);
                myCollectionView.ItemsSource = DataList;
            }
        }
        catch (Exception ex)
        {
            // Handle errors
            Console.WriteLine(ex.Message);
        }
    }

    protected override void OnAppearing()
    {
        base.OnAppearing();
        GetDataFromApiAsync();
    }
}

