<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$data['page']='Home';

		$this->load->view('header',$data);
		$this->load->view('index');
		$this->load->view('footer');
	}
	public function about()
	{
		$data['page']='About';

		$this->load->view('header',$data);
		$this->load->view('about');
		$this->load->view('footer');
	}
	public function service()
	{
		$data['page']='Services';

		$this->load->view('header',$data);
		$this->load->view('service');
		$this->load->view('footer');
	}
	public function gallery()
	{
		$data['page']='gallery';

		$this->load->view('header',$data);
		$this->load->view('gallery');
		$this->load->view('footer');
	}
	public function pages()
	{
		$data['page']='Pages';

		$this->load->view('header',$data);
		$this->load->view('pages');
		$this->load->view('footer');
	}
	public function destination()
	{
		$data['page']='Destination';

		$this->load->view('header',$data);
		$this->load->view('destination');
		$this->load->view('footer');
	}
	public function booking()
	{
		$data['page']='Booking';

		$this->load->view('header',$data);
		$this->load->view('booking');
		$this->load->view('footer');
	}
	public function travel()
	{
		$data['page']='Travel';

		$this->load->view('header',$data);
		$this->load->view('travel');
		$this->load->view('footer');
	}
	public function testimonial()
	{
		$data['page']='Testimonial';

		$this->load->view('header',$data);
		$this->load->view('testimonial');
		$this->load->view('footer');
	}
	public function contact()
	{
		$data['page']='Contact';

		$this->load->view('header',$data);
		$this->load->view('contact');
		$this->load->view('footer');
	}
}
